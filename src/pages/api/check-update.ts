export async function GET() {

    const data = {
        testing: false,
        winExtension: "exe",
        osxExtension: "pkg",
        linuxExtension: "AppImage",
        // betaversion: {
        //     version: "1.9.23b13",
        //     changelog: ["Bonjour", "Ceci est", "Un test"]
        // },
        // stableversion: {
        //     version: "1.9.24",
        //     changelog: ["coucou", "prout", "test"]
        // },
        // archives: [
        //     { version: "1.0.0", changelog: ["first!"] },
        // ]
    };

    return Response.json(data);
}
