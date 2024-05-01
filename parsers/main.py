database = """
--lxl_warn: rgba(255, 169, 77, 255);
--lxl_nagbar_text: rgba(255, 255, 255, 255);
--lxl_dim: rgba(82, 82, 87, 255);
--lxl_background2: rgba(30, 31, 34, 255);
--lxl_good: rgba(114, 184, 134, 255);
--lxl_line_number2: rgba(85, 85, 85, 255);
--lxl_caret: rgba(173, 244, 255, 255);
--lxl_accent: rgba(173, 244, 255, 255);
--lxl_background3: rgba(30, 31, 34, 255);
--lxl_line_highlight: rgba(173, 215, 255, 13);
--lxl_nagbar: rgba(255, 0, 0, 255);
--lxl_modified: rgba(28, 124, 156, 255);
--lxl_scrollbar2: rgba(75, 75, 82, 255);
--lxl_text: rgba(255, 255, 255, 255);
--lxl_drag_overlay_tab: rgba(147, 221, 250, 255);
--lxl_divider: rgba(30, 30, 30, 255);
--lxl_guide: rgba(85, 85, 85, 48);
--lxl_guide_highlighting: rgba(85, 85, 85, 187);
--lxl_scrollbar: rgba(65, 65, 70, 255);
--lxl_scrollbar_track: rgba(37, 37, 41, 255);
--lxl_error: rgba(255, 51, 51, 255);
--lxl_selection: rgba(170, 170, 170, 64);
--lxl_background: rgba(43, 45, 49, 255);
--lxl_line_number: rgba(85, 85, 85, 144);
--lxl_string: rgba(163, 211, 252, 255);
--lxl_exclude: rgba(243, 97, 97, 255);
--lxl_comment: rgba(139, 148, 158, 255);
--lxl_symbol: rgba(255, 79, 144, 255);
--lxl_paren_unbalanced: rgba(220, 4, 8, 255);
--lxl_ignore: rgba(114, 184, 134, 255);
--lxl_operator: rgba(51, 255, 231, 255);
--lxl_number: rgba(43, 223, 255, 255);
--lxl_keyword2: rgba(255, 202, 10, 255);
--lxl_literal: rgba(255, 202, 10, 255);
--lxl_markdown_bold: rgba(255, 202, 10, 255);
--lxl_function: rgba(18, 215, 255, 255);
--lxl_paren2: rgba(252, 176, 83, 255);
--lxl_diff_del: rgba(243, 97, 97, 255);
--lxl_paren3: rgba(252, 212, 118, 255);
--lxl_markdown_bold_italic: rgba(255, 202, 10, 255);
--lxl_paren5: rgba(90, 152, 207, 255);
--lxl_normal: rgba(255, 255, 255, 255);
--lxl_keyword: rgba(255, 87, 182, 255);
--lxl_paren1: rgba(252, 111, 113, 255);
--lxl_paren4: rgba(82, 218, 178, 255);
--lxl_markdown_italic: rgba(255, 202, 10, 255);
--lxl_diff_add: rgba(114, 184, 134, 255);
"""

new_data = ""

with open("./test.lua") as fp:
    lines = fp.readlines()
    for line in lines:
        if line.startswith("style.") and not line.startswith("style.syntax"):
            name = "--lxl_" + line.split(" ")[0].replace("style.", "")
            color = line.split('"')[1]
            my_data = database.split("\n")
            database = ""
            for i in my_data:
                if i.startswith(name):
                    new_data += f"{name}: {color};\n"
                else:
                    new_data += i + "\n"
    print(new_data)

