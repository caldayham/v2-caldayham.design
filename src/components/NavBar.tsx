import Link from "next/link";

export function NavBar() {
    return (
        <div>
            <ul>
                <Link href='/'>About</Link>
                <Link href='/'>Project Consultation</Link>
                <Link href='/'>Portfolio</Link>
            </ul>
        </div>
    )
}