export default function getUrl(path) {
    if (window.location.origin) {
        return `${window.location.origin}${path}`;
    } else {
        return `http://127.0.0.1:8000`
    }
}
