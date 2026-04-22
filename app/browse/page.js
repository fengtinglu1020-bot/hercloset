export default function BrowsePage() {
  const products = [
    {
      name: "法式碎花吊带裙",
      price: 129,
      likes: 24,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
    },
    {
      name: "白色泡泡袖连衣裙",
      price: 149,
      likes: 18,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    },
    {
      name: "盐系吊带套装",
      price: 99,
      likes: 36,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    },
    {
      name: "度假风露背长裙",
      price: 128,
      likes: 22,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    },
    {
      name: "Y2K 格纹短裙",
      price: 89,
      likes: 15,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
    },
    {
      name: "海边奶油色长裙",
      price: 119,
      likes: 31,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
    },
    {
      name: "轻法式约会短裙",
      price: 139,
      likes: 27,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800",
    },
    {
      name: "城市街拍两件套",
      price: 109,
      likes: 19,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    },
  ];

  const tags = ["French", "Clean Girl", "Beach", "Citywalk", "Summer"];

  return (
    <main style={{ fontFamily: "sans-serif", background: "#F6F6F2", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          alignItems: "center",
          borderBottom: "1px solid #EAE6E0",
          background: "#F6F6F2",
          position: "sticky",
          top: 0,
        }}
      >
        <a href="/" style={{ textDecoration: "none", color: "#111" }}>
          <h2 style={{ margin: 0 }}>HerCloset</h2>
        </a>

        <div style={{ display: "flex", gap: 20, color: "#666" }}>
          <span>Style</span>
          <span>Scene</span>
          <span>Season</span>
        </div>

        <a
          href="/"
          style={{
            textDecoration: "none",
            background: "#111",
            color: "white",
            padding: "10px 18px",
            borderRadius: 999,
            fontSize: 14,
          }}
        >
          Back Home
        </a>
      </div>

      <div style={{ padding: "40px" }}>
        <div style={{ marginBottom: 30 }}>
          <h1 style={{ fontSize: 48, marginBottom: 10 }}>Browse</h1>
          <p style={{ color: "#666", margin: 0 }}>
            Curated second-hand vacation outfits for every destination ✨
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            marginBottom: 40,
          }}
        >
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                background: "white",
                borderRadius: 999,
                padding: "12px 20px",
                whiteSpace: "nowrap",
                border: "1px solid #EAE6E0",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: 20,
                padding: 12,
                border: "1px solid #EAE6E0",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 14,
                }}
              />

              <div style={{ marginTop: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                  {item.name}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#777",
                    fontSize: 14,
                  }}
                >
                  <span>¥{item.price}</span>
                  <span>♡ {item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
