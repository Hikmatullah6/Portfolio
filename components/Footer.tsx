export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                <div>{year} © All Rights Reserved</div>
                <div>Developed by Hussain</div>
            </div>
        </footer>
    );
}
