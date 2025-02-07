import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/Components/Button";
import Featurecard from "@/Components/Featurecard";
import { Cloudsecure, Logo, Cloud, Secure, Target } from "@/Components/Icon";
import Products from "@/Components/Products";
import products from "@/Components/productData";
import testimonies from "@/Components/testimonyData";
import Testimonycard from "@/Components/Testimonycard";
import Link from "next/link";
import Groupedimage from "@/Components/Groupedimage";

export default function Home() {
  const renderProducts = products.map((product, index) => {
    return <Products key={index} price={product.price} benefits={product.benefits} productName={product.productName} description={product.description} popular={product.popular} />
  });
  
  const renderTestimony = testimonies.map((testimony, index) => {
    return <Testimonycard key={index} userImage={testimony.userImage} userName={testimony.userName} role={testimony.userRole} testimony={testimony.testimony} />
  })

  return (
    <>
      {/* <Button className="buttonfilled">Click Me</Button>
      <Button className="buttonemptied">Click Me</Button>
      <Featurecard icon={<Cloudsecure />} title="On-chain Record
" description="Each gift is minted as an NFT on our decentralized protocol, creating a permanent, tamper-proof record." link="#"  />
      <div className="product-container">
        {renderProducts}
      </div>
      <div className="testimony-container">
        {renderTestimony}
      </div>
      <Groupedimage images={["holly.png", "ivy.png", "jasper.png"]} /> */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
          <span className="logoText">GiftChain.ai</span>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">Solution</Link>
            </li>
            <li>
              <Link href="/">Customer</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
          </ul>
        </nav>

        <Button className={`${styles.headerBtn} buttonemptied`}>Login</Button>
        <Button className='buttonfilled'>Sign up</Button>
      </header>
      <div className={styles.hero}>
        <h1 className={styles.heroText}>
          AI-Powered Blockchain for Effortless Gift Management
        </h1>
        <p>
          Scaling holiday logistics through a decentralized proof-of-work protocol with autonomous LLM-powered agents.
        </p>
        <div>
          <Button className="buttonfilled">Try for free</Button>
          <Button className="buttonemptied">Watch a demo</Button>
        </div>
      </div>
      <div className={styles.dashboardImgContainer}>
        <Image className={styles.dashboardImg} src='/images/dashboard.png' width={1087} height={687} alt='Dashboard Image' />
      </div>
      <div>
        <h2 className={styles.subheader}>Everything Santas Need In One Platform</h2>
        <p className={styles.productParagraph}>
          We automated Santas job and added it to the blockchain so that you don’t have to do it.
        </p>
      </div>
      <div className={styles.features}>
        <Featurecard icon={<Cloudsecure />} title="On-chain Record
  " description="Each gift is minted as an NFT on our decentralized protocol, creating a permanent, tamper-proof record." link="#"  />
        <Featurecard icon={<Secure />} title="On-chain Record
  " description="Each gift is minted as an NFT on our decentralized protocol, creating a permanent, tamper-proof record." link="#"  />
        <Featurecard icon={<Cloud />} title="On-chain Record
  " description="Each gift is minted as an NFT on our decentralized protocol, creating a permanent, tamper-proof record." link="#"  />
        <Featurecard icon={<Target />} title="On-chain Record
  " description="Each gift is minted as an NFT on our decentralized protocol, creating a permanent, tamper-proof record." link="#"  />
      </div>
      <div className={styles.herosection2}>
        <div>
          <h3>Say goodbye to gift chaos this year</h3>
          <p>No need to worry about your gift being lost or delivered to the wrong child. We’ll handle every single one.</p>
          <div>
            <Groupedimage images={["holly.png", "ivy.png", "jasper.png"]} />
            <span>More than 10,000 elfs have tried</span>
          </div>
          <Button className='buttonemptied'>Try for free</Button>
        </div>
        <Image src='/images/dashboard.png' width={1087} height={687} alt='Dashboard Image' /> 
      </div>
    </>
  );
}
