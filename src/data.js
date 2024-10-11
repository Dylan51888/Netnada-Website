import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#story", text: "story" },
];
// ../data.js (或其他存放 socialLinks 的文件)
export const socialLinks = [
  {
    id: 1,
    href: "mailto:support@netnada.com.au", // 使用 mailto 触发邮件界面
    text: "Contact Us", // 显示文字
  },
  {
    id: 2,
    href: "https://www.netnada.com.au/book-a-demo", // 跳转到 Request a Demo 页面
    text: "Request a Demo", // 显示文字
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-briefcase fa-fw",
    title: "By company size",
    text: "NetNada for every stage of your organisation.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "By objective",
    text: "NetNada can help you with any of your sustainability goals.",
  },
  {
    id: 3,
    icon: "fas fa-bullseye fa-fw",
    title: "By industry",
    text: "Follow industry standards and compare with your peers.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "2012",
    title: "Smart Commercial Solar",
    info: ` Founded in 2012 by Huon Hoogesteger, Smart Commercial Solar is a leader in the commercial solar industry, known for innovative energy solutions. The company has pioneered the use of Power Purchase Agreements (PPAs) to accelerate solar adoption among businesses.`,
    link: "https://www.netnada.com.au/climate-partners/smart-commercial-solar",
  },
  {
    id: 2,
    image: tour2,
    date: "2020",
    title: "Energy Locals",
    info: ` Energy Locals is an Australian energy retailer committed to affordability, transparency, and sustainability. They focus on providing cleaner, cheaper energy options, ensuring that their customers benefit from ethical business practices such as fair pricing and local customer support.`,
    link: "https://www.netnada.com.au/climate-partners/energy-locals-2",
  },
  {
    id: 3,
    image: tour3,
    date: "2023",
    title: "Gold Coast Convention",
    info: ` The Gold Coast Convention and Exhibition Centre (GCCEC) is a premier event venue situated in the heart of the Gold Coast. Known for its world-class facilities, GCCEC offers state-of-the-art event spaces surrounded by luxury hotels, fine dining, and stunning beaches.`,
    link: "https://www.netnada.com.au/climate-partners/gold-coast-convention-centre",
  },
  {
    id: 4,
    image: tour4,
    date: "2019",
    title: "Sustainable Occasion",
    info: `The Sustainable Occasion is an award-winning event management agency headquartered in Sydney, with a global reach. They specialise in delivering sustainable event solutions`,
    link: "https://www.netnada.com.au/climate-partners/sustainable-occasion",
  },
];

// 添加新的footerLinks数组
export const footerLinks = [
  {
    id: 1,
    text: "Product",
    url: "https://www.netnada.com.au/solution/measure-carbon-emissions",
  },
  {
    id: 2,
    text: "Reporting",
    url: "https://www.netnada.com.au/products/issb-emissions-disclosures",
  },
  {
    id: 3,
    text: "By size",
    url: "https://www.netnada.com.au/solution/smes",
  },
  {
    id: 4,
    text: "Ecosystem",
    url: "https://www.netnada.com.au/customers",
  },
];
