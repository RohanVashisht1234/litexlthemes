--- Author: Rohan Vashisht


--- Imports
local style = require "core.style"
local common = require "core.common"
---


--- Syntax
style.syntax["normal"]   = { common.color "#ffffff" } -- tested ok
style.syntax["symbol"]   = { common.color "#ff4f90" } -- tested ok
style.syntax["comment"]  = { common.color "#8b949e" } -- tested ok
style.syntax["keyword"]  = { common.color "#ff57b6" } -- tested ok
style.syntax["keyword2"] = { common.color "#ffca0a" } -- tested ok
style.syntax["number"]   = { common.color "#2bdfff" } -- tested ok
style.syntax["literal"]  = { common.color "#ffca0a" } -- tested ok
style.syntax["string"]   = { common.color "#a3d3fc" } -- tested ok
style.syntax["operator"] = { common.color "#33ffe7" } -- tested ok
style.syntax["function"] = { common.color "#12d7ff" } -- tested ok
---


--- Editor
style.background     = { common.color "#2b2d31" }   -- tested ok
style.caret          = { common.color "#adf4ff" }   -- tested ok
style.line_highlight = { common.color "#add7ff0d" } -- tested ok
style.selection      = { common.color "#aaaaaa40" } -- tested ok
---


--- Guide
style.guide              = { common.color "#55555530" } -- tested ok
style.guide_highlighting = { common.color "#555555bb" } -- tested ok
---


--- Linters
style.lint         = {}                         -- tested ok
style.lint.info    = { common.color "#28A9FF" } -- tested ok
style.lint.hint    = { common.color "#42DD76" } -- tested ok
style.lint.warning = { common.color "#FFB638" } -- tested ok
style.lint.error   = { common.color "#D62C2C" } -- tested ok
---


--- UI components
style.background2  = { common.color "#1e1f22" }   -- tested ok
style.background3  = { common.color "#1e1f22" }   -- tested ok
style.text         = { common.color "#ffffff" }   -- tested ok
style.accent       = style.caret                  -- tested ok
style.divider      = { common.color "#1e1e1e" }   -- tested ok
style.line_number  = { common.color "#55555590" } -- tested ok
style.line_number2 = { common.color "#555555" }   -- tested ok
---

