local style = {}
-- fixme: figure out how to do it correctly 
dofile("./test.lua")
for k, v in pairs(style) do
  print(k, "\t", v)
end