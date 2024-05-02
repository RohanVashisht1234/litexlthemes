import sys
from lupa import LuaRuntime
INITIALIZE_DEFAULT:str = """common = {}
function common.color(color) return color end
style = {}
style.syntax = {}
style.log = {}"""

def sanitize_lua(lines:list) -> str:
    """Sanitize the lua file by removing the lines that have a require in them"""
    compiled_file:str = ""
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
    lua:any = LuaRuntime(unpack_returned_tuples=True)
    lua.execute(INITIALIZE_DEFAULT)
    sanitized_lua:str = sanitize_lua(read_lua_file(argv[argc]))
    lua.execute(sanitized_lua)
    style:any = lua.globals().style
    syntax:dict = style.syntax

    for i in syntax:
        print(i, syntax[i][1])

    for i in style:
        if i == "syntax" or i == "log":
            continue
        print(i, style[i][1])

    return 0


if __name__ == "__main__":
    _ = main(len(sys.argv), sys.argv)
