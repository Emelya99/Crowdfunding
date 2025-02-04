import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import Container from "@/components/ui/container";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-5">
      <Container>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link href={ROUTES.ABOUT}>About</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
