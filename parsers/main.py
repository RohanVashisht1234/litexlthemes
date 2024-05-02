import sys
from lupa import LuaRuntime

INITIALIZE_DEFAULT: str = """common = {}
function common.color(color) return color end
style = {}
style.syntax = {}
style.log = {}"""

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


def read_lua_file(file_name: str) -> list:
    """Read lua file read lines"""
    with open(file_name, "r") as fh:
        read_lines = fh.readlines()
    return read_lines


def main(argc: int, argv: list) -> int:
    """Function main"""
    lua: any = LuaRuntime(unpack_returned_tuples=True)
    lua.execute(INITIALIZE_DEFAULT)
    sanitized_lua: str = sanitize_lua(read_lua_file(argv[argc - 1]))
    lua.execute(sanitized_lua)
    style: any = lua.globals().style
    syntax: dict = style.syntax

    for i in syntax:
        COLORS[i] = syntax[i][1]

    for i in style:
        if i == "syntax" or i == "log":
            continue
        print(i, style[i][1])
        # colors[i] = syntax[i][1]


    return 0


if __name__ == "__main__":
    _ = main(len(sys.argv), sys.argv)
