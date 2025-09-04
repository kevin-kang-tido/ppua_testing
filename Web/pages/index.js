import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import logo from "@/public/image/logo.jpeg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const data_image = [
  {
    id: 1,
    name: "",
    image: require("@/public/image/1.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/2.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/3.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/4.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/5.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/6.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/7.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/8.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/9.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/10.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/11.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/12.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/13.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/14.jpeg"),
  },
  {
    id: 1,
    name: "",
    image: require("@/public/image/15.jpeg"),
  },
];

export default function Home() {
  return (
    <div className="px-[10px] lg:px-[5%]">
      <div class="flex justify-center mt-10">
        <Image
          src={logo}
          style={{ width: 130, height: 130, borderRadius: "50%" }}
        />
        <div className="ml-4 mt-5">
          <div style={{ fontWeight: "bold", fontSize: 30 }}>AROMA FOOD</div>
          <div>012 678 913 / 088 283 03 66 </div>
        </div>
      </div>
      <div
        style={{ padding: 20 }}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {data_image?.map((item, index) => (
          <div className="p-4" key={index}>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                width: 40,
                height: 40,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                fontWeight: "bold",
                position: "absolute",
                border: "2px solid #FFF",
                marginTop: 1,
                marginLeft: 1,
              }}
            >
              {index + 1}
            </div>
            <Image src={item.image} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
