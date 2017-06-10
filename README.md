# Typescript-Debugging-VSCode
configurations to debug typescript in VSCode using Node - no website etc

The following configurations are required to get it working:

# tsconfig.json:

{
    "version": "0.2.0",
    "configurations": [{
            "type": "node",
            "request": "launch",
            "name": "Launch",
            "sourceMaps": true,
            "stopOnEntry": true,
            "console": "internalConsole",
            "cwd": "${workspaceRoot}",
            "program": "${workspaceRoot}/src/Hello.ts",
            "outFiles": ["${workspaceRoot}/dest/*.js"]
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Process",
            "port": 5858,
            "outFiles": []
        }
    ]
}


# launch.json:

{
    "version": "0.2.0",
    "configurations": [{
            "type": "node",
            "request": "launch",
            "name": "Launch",
            "sourceMaps": true,
            "stopOnEntry": true,
            "console": "internalConsole",
            "cwd": "${workspaceRoot}",
            "program": "${workspaceRoot}/src/Hello.ts",
            "outFiles": ["${workspaceRoot}/dest/*.js"]
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Process",
            "port": 5858,
            "outFiles": []
        }
    ]
}

# taks.json:

{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-p", "."],
    "showOutput": "always",
    "problemMatcher": "$tsc-watch"
}

Also, the directory structure of /src and /dest is required.
