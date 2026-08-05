const fs = require('fs');
const readline = require('readline');

async function extract() {
    const fileStream = fs.createReadStream('C:\\Users\\admin\\.gemini\\antigravity\\brain\\4b91b6e1-a5f4-43f4-8434-45e18ef709e8\\.system_generated\\logs\\transcript_full.jsonl');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let bestClientCode = null;
    let bestAdminCode = null;

    for await (const line of rl) {
        if (!line.trim()) continue;
        const obj = JSON.parse(line);
        if (obj.step_index >= 824) break; 
        
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'write_to_file' || call.name === 'replace_file_content') {
                    const args = call.args;
                    if (args.TargetFile && args.TargetFile.includes('client-dashboard.html')) {
                        if (args.CodeContent && !args.CodeContent.includes('<truncated')) {
                            bestClientCode = args.CodeContent;
                        }
                    }
                    if (args.TargetFile && args.TargetFile.includes('admin-dashboard.html')) {
                        if (args.CodeContent && !args.CodeContent.includes('<truncated')) {
                            bestAdminCode = args.CodeContent;
                        }
                    }
                }
            }
        }
    }

    if (bestClientCode) {
        fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\client-dashboard.html', bestClientCode);
        console.log('Restored client-dashboard.html');
    }
    if (bestAdminCode) {
        fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\admin-dashboard.html', bestAdminCode);
        console.log('Restored admin-dashboard.html');
    }
}

extract();
