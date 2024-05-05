local style = require "core.style"
local common = require "core.common"

style.background = { common.color "#242936" }  -- Docview
style.background2 = { common.color "#242936" } -- Treeview
style.background3 = { common.color "#212633" } -- Command view
style.text = { common.color "#cccac2" } -- default text color
style.caret = { common.color "#ffcc66" }
style.accent = { common.color "#bcbacf" } -- Treeview hovered item
-- style.dim - text color for nonactive tabs, tabs divider, prefix in log and
-- search result, hotkeys for context menu and command view
style.dim = { common.color "#5C6370" }
style.divider = { common.color "#242936" } -- Line between nodes
style.selection = { common.color "#48484f" }
style.line_number = { common.color "#525259" }
style.line_number2 = { common.color "#83838f" } -- With cursor
style.line_highlight = { common.color "#343444" }
style.scrollbar = { common.color "#444956" }
style.scrollbar2 = { common.color "#545976" } -- Hovered
style.scrollbar_track = { common.color "#313643" }
style.nagbar = { common.color "#DD0033" }
style.nagbar_text = { common.color "#FFFFFF" }
style.nagbar_dim = { common.color "rgba(0, 0, 0, 0.45)" }
style.drag_overlay = { common.color "rgba(255,255,255,0.1)" }
style.drag_overlay_tab = { common.color "#93DDFA" }
style.good = { common.color "#72b886" }
style.warn = { common.color "#FFA94D" }
style.error = { common.color "#ff6666" }
style.modified = { common.color "#1c7c9c" }

style.syntax["normal"] = { common.color "#e1e1e6" }
style.syntax["symbol"] = { common.color "#5ccfe6" } -- object's property, class name
style.syntax["comment"] = { common.color "#b8cfe680" }
style.syntax["keyword"] = { common.color "#ffad66" }  -- local function end if case namespace use const
style.syntax["keyword2"] = { common.color "#e1e1e6" } --  self int float, function parameter, function variable, class property
style.syntax["number"] = { common.color "#ffcc66" } -- numeric value, const name, null
style.syntax["literal"] = { common.color "#f07171" }  -- true false nil
style.syntax["string"] = { common.color "#d5ff80" }
style.syntax["operator"] = { common.color "#f29e74" } -- = + - / < >
style.syntax["function"] = { common.color "#ffd173" }

style.log["INFO"]  = { icon = "i", color = style.text }
style.log["WARN"]  = { icon = "!", color = style.warn }
style.log["ERROR"] = { icon = "!", color = style.error }
