import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./navbar";
import Image from "next/image";
import bkim from "../public/bkim.jpg"
import Footer from "./footer";

export default function Main({children}) {
    return (
        <ChakraProvider height="100vh" width="100vw">
            <div id="bgWrap">
                <Image
                    alt="travel"
                    src={bkim}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <nav>
                <NavBar/>
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
            <style jsx>
                {`
                nav,main,footer {
                    width: 80em;
                    margin: 0 auto 0;   
                    padding-left:20px;
                    padding-right:20px;
                }
                #bgWrap {
                    position: fixed;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    z-index: -1;
                    top:0;
                    background
                }
                `}
            </style>
        </ChakraProvider> 
        
    );
}