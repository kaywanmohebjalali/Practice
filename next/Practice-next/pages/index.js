
import { Inter } from "next/font/google";
import Link from "next/link";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
   
      <h1>index</h1>

      <div>
  
    <Link href='/products' >Products</Link>
    </div>
      

    </>
  );
}

