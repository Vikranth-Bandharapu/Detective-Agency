import os
import re

p1 = open('generate_tailwind_dash_p1.js', 'r').read()
p2 = open('generate_tailwind_dash_p2.js', 'r').read()
p3 = open('generate_tailwind_dash_p3.js', 'r').read()
final = open('generate_tailwind_dash_final.js', 'r').read()

# We just remove the requires and evals from the final, and paste them all together.
final = final.replace("const fs = require('fs');", "")
final = final.replace("const p1 = fs.readFileSync('generate_tailwind_dash_p1.js', 'utf8');", "")
final = final.replace("const p2 = fs.readFileSync('generate_tailwind_dash_p2.js', 'utf8');", "")
final = final.replace("const p3 = fs.readFileSync('generate_tailwind_dash_p3.js', 'utf8');", "")
final = final.replace("eval(p1);", "")
final = final.replace("eval(p2);", "")
final = final.replace("eval(p3);", "")

combined = p1 + "\n" + p2 + "\n" + p3 + "\n" + final

with open('generate_combined.js', 'w') as f:
    f.write("const fs = require('fs');\n")
    # avoid redeclaring fs
    combined = combined.replace("var fs = require('fs');", "")
    f.write(combined)
