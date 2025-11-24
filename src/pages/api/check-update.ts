import Config from "@config";

const formatVersion = (data: any) => {
    return {
        version: data.tag_name,
        changelog: data.body ? data.body.split('\n') : []
    };
};

export async function GET() {

    const data = {
        testing: false,
        winExtension: "exe",
        osxExtension: "pkg",
        linuxExtension: "AppImage",
        betaversion: {},
        stableversion: {},
        archives: []
    };

    const apiData = await fetch(Config.github.getApiReleases()).then(res => res.json());
    let betaVersion = null;
    let stableVersion = null;

    for (let i = 0; i < apiData.length; i++) {
        const release = apiData[i];
        if (betaVersion === null && release.tag_name.includes('b')) {
            betaVersion = release;
        }
        if (stableVersion === null && !release.tag_name.includes('b')) {
            stableVersion = release;
        }
        if (betaVersion !== null && stableVersion !== null) {
            break;
        }
    }

    if (betaVersion) {
        data.betaversion = formatVersion(betaVersion);
    }
    if (stableVersion) {
        data.stableversion = formatVersion(stableVersion);
    }

    for (let i = apiData.length - 1; i >= 0; i--) {
        if (apiData[i].tag_name === stableVersion?.tag_name) continue;
        if (apiData[i].tag_name === betaVersion?.tag_name) continue;
        data.archives.push(formatVersion(apiData[i]));
    }

    return Response.json(data);
}
