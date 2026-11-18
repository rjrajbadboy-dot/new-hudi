import React from "react";
import {
  AbsoluteFill,
  Composition,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  registerRoot,
} from "remotion";

const scenes = [
  {
    image: "pink-model.jpg",
    title: "কিউট ক্যাট প্রিন্ট হুডি!",
    subtitle: "স্টাইল ও আরামের সুন্দর কম্বিনেশন",
  },
  {
    image: "lavender-model.jpg",
    title: "দুটি সুন্দর কালার",
    subtitle: "পিংক ও ল্যাভেন্ডার",
  },
  {
    image: "pink-product.jpg",
    title: "প্রিমিয়াম ফ্লিস ফেব্রিক",
    subtitle: "নরম, আরামদায়ক ও উষ্ণ",
  },
  {
    image: "lavender-product.jpg",
    title: "কিউট ক্যাট ডিজাইন",
    subtitle: "সুন্দর প্রিন্ট ও সামনের পকেট",
  },
  {
    image: "pink-model.jpg",
    title: "আপনার পছন্দের হুডি",
    subtitle: "M, L ও XL সাইজ পাওয়া যাচ্ছে",
  },
  {
    image: "lavender-product.jpg",
    title: "১০০% কালার ও ফেব্রিক গ্যারান্টি",
    subtitle: "যত্নের সঙ্গে ব্যবহার করুন",
  },
  {
    image: "pink-product.jpg",
    title: "নিয়মিত দাম ৳১,১৯০",
    subtitle: "এখন অফার মূল্য মাত্র ৳৬৯০",
  },
  {
    image: "lavender-model.jpg",
    title: "ক্যাশ অন ডেলিভারি",
    subtitle: "ফোন: 01775319360",
  },
  {
    image: "pink-model.jpg",
    title: "অর্ডার করুন এখনই!",
    subtitle: "সারা বাংলাদেশে ডেলিভারি",
  },
];

const Scene = ({ item, index }: any) => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, 150], [1, 1.1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#1c1020" }}>
      <Img
        src={staticFile(item.image)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${zoom})`,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 55,
          paddingBottom: 150,
          background:
            "linear-gradient(transparent 30%, rgba(0,0,0,0.88))",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 58,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            color: "#ffe0ed",
            fontSize: 36,
            textAlign: "center",
          }}
        >
          {item.subtitle}
        </div>
        {index === 6 && (
          <div style={{ color: "#ffdf58", fontSize: 82, fontWeight: "bold" }}>
            ৳৬৯০
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ProductAd = () => (
  <AbsoluteFill>
    {scenes.map((item, index) => (
      <Sequence
        key={index}
        from={index * 150}
        durationInFrames={150}
      >
        <Scene item={item} index={index} />
      </Sequence>
    ))}
  </AbsoluteFill>
);

const RemotionRoot = () => (
  <Composition
    id="ProductAd"
    component={ProductAd}
    durationInFrames={1350}
    fps={30}
    width={1080}
    height={1920}
  />
);

registerRoot(RemotionRoot);
