const Config = {
    comingSoon: false,
    projectName: "SnoringPony",
    github: {
        owner: "boherm",
        repo: "SnoringPony",
        getUrl() {
            return `https://github.com/${this.owner}/${this.repo}`;
        },
        getDownloadUrl(version: string, platform: string, extension: string) {
            if (!version)
                return Config.devVersion.getDownloadUrl(platform, extension);
            return this.getUrl() + `/releases/download/${version}/${Config.projectName}-${platform}-${version}.${extension}`;
        },
        getChangeLogUrl(version: string) {
            return this.getUrl() + `/releases/tag/${version}`;
        },
        getApiReleases() {
            return `https://api.github.com/repos/${this.owner}/${this.repo}/releases?per_page=100`;
        }
    },
    discord: {
        getUrl() {
            return `https://discord.gg/7HNzrvuZUS`;
        },
    },
    devVersion: {
        urlBase: 'https://snoringpony-dev.s3.fr-par.scw.cloud/',
        getDownloadUrl(platform: string, extension: string) {
            return this.urlBase + `SnoringPony-${platform}-dev.${extension}`;
        }
    }
};
export default Config;
