const fs = require('fs');
const readline = require('readline');

async function extract() {
    const fileStream = fs.createReadStream('C:\\Users\\admin\\.gemini\\antigravity\\brain\\4b91b6e1-a5f4-43f4-8434-45e18ef709e8\\.system_generated\\logs\\transcript.jsonl');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let bestCode = null;

    for await (const line of rl) {
        if (!line.trim()) continue;
        const obj = JSON.parse(line);
        if (obj.step_index >= 824) break; // stop when we reach the expand_all_tabs script
        
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'write_to_file' || call.name === 'replace_file_content') {
                    const args = call.args;
                    if (args.TargetFile && args.TargetFile.includes('client-dashboard.html')) {
                        if (args.CodeContent) {
                            bestCode = args.CodeContent;
                        } else if (args.ReplacementContent) {
                            // it was a replacement, harder to track. Let's just hope there's a full write
                        }
                    }
                }
            }
        }
    }

    if (bestCode) {
        fs.writeFileSync('C:\\Users\\admin\\Desktop\\Detective agency\\client-dashboard-restored.html', bestCode);
        console.log('Restored client-dashboard.html');
    } else {
        console.log('Could not find full write.');
    }
}

extract();
