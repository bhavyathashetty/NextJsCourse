import Link from 'next/link';

const head= () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link as="/post/first" href="/post/[id]">
                    <a>First Post</a>
                </Link>
            </li>
            <li>
                <Link as="/post/second" href="/post[id]">
                    <a> Second Post</a>
                </Link>
            </li>
        </ul>
    </header>
);
export default head;