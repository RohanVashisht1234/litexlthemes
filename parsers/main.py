import sys
from lupa import LuaRuntime
import json

INITIALIZE_DEFAULT: str = """common = {}
function common.color(color) return color end
style = {}
style.syntax = {}
style.log = {}"""

DIR_NAME = "./images"

# Default dictionary:
COLORS: dict = {
    "normal": "#e1e1e6",
    "comment": "#676b6f",
    "literal": "#FFA94D",
    "string": "#f7c95c",
    "keyword": "#E58AC9",
    "keyword2": "#F77483",
    "function": "#93DDFA",
    "operator": "#93DDFA",
    "number": "#FFA94D",
    "symbol": "#e1e1e6",
    "dim": "#525257",
    "warn": "#FFA94D",
    "scrollbar2": "#4b4b52",
    "scrollbar": "#414146",
    "modified": "#1c7c9c",
    "accent": "#e1e1e6",
    "line_number": "#525259",
    "background": "#2e2e32",
    "error": "#FF3333",
    "nagbar_text": "#FFFFFF",
    "good": "#72b886",
    "background3": "#252529",
    "nagbar_dim": "rgba(0, 0, 0, 0.45)",
    "text": "#97979c",
    "drag_overlay_tab": "#93DDFA",
    "nagbar": "#FF0000",
    "selection": "#48484f",
    "background2": "#252529",
    "scrollbar_track": "#252529",
    "drag_overlay": "rgba(255,255,255,0.1)",
    "caret": "#93DDFA",
    "divider": "#202024",
    "line_highlight": "#343438",
    "line_number2": "#83838f",
}


def sanitize_lua(lines: list) -> str:
    """Sanitize the lua file by removing the lines that have a require in them"""
    compiled_file: str = ""
    for line in lines:
        if "require" in line:
            continue
        compiled_file += line
    return compiled_file


def generate_html(file_name: str) -> None:
    """Generate html from the compiled json"""
    output_file_name = (
        DIR_NAME + "/" + file_name.replace(".lua", ".svg").replace("./", "")
    )
    colors_generated: dict = {}
    for i in COLORS:
        colors_generated["--lxl_" + i] = COLORS[i]
    compiled_json: str = json.dumps(colors_generated, indent=4)

    with open(output_file_name, "w") as myfile:
        with open("./template.svg", "r") as template_file:
            content: str = template_file.read()
            content = content.replace("{{%INSERT VALUE HERE%}}", compiled_json.replace("\"", "").replace(",", ";"))
            myfile.write(content)
    return None


def read_lua_file(file_name: str) -> list:
    """Read lua file read lines"""
    with open(file_name, "r") as fh:
        read_lines = fh.readlines()
    return read_lines


def main(argc: int, argv: list) -> int:
    """Function main"""
    lua: any = LuaRuntime(unpack_returned_tuples=True)
    lua.execute(INITIALIZE_DEFAULT)
    file_name: str = argv[argc - 1]
    sanitized_lua: str = sanitize_lua(read_lua_file(file_name))
    lua.execute(sanitized_lua)
    style: any = lua.globals().style
    syntax: dict = style.syntax

    for i in syntax:
        COLORS[i] = syntax[i][1]

    for i in style:
        if i == "syntax" or i == "log":
            continue
        COLORS[i] = style[i][1]
    generate_html(file_name)
    return 0


if __name__ == "__main__":
    exit_code: int = main(len(sys.argv), sys.argv)
    sys.exit(exit_code)
