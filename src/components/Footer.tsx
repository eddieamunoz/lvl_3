export function Footer({companyName}: {companyName: string}) {
    return (
        <footer text-sm>
            © {companyName} {new Date().getFullYear()}
        </footer>
    );
}