export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", background: "#F6F6F2" }}>
      
      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        alignItems: "center"
      }}>
        <h2>HerCloset</h2>
        <div style={{ display: "flex", gap: 20 }}>
          <span>Style</span>
          <span>Scene</span>
          <span>Season</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        display: "flex",
        padding: "40px",
        alignItems: "center",
        gap: 40
      }}>
        
        {/* 左边文字 */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 60, marginBottom: 20 }}>
            Welcome To <br /> HerCloset
          </h1>

          <p style={{ marginBottom: 20, color: "#666" }}>
            for your next trip ✨
          </p>

          <button style={{
            padding: "12px 24px",
            borderRadius: 20,
            border: "none",
            background: "#111",
            color: "white"
          }}>
            Explore →
          </button>
        </div>

        {/* 右边图片 */}
        <div style={{ flex: 1 }}>
          <img 
            src="https://images.unsplash.com/photo-1520975922284-9e0ce827fcbf"
            style={{
              width: "100%",
              borderRadius: 20
            }}
          />
        </div>
      </div>

      {/* Explore */}
      <div style={{ padding: "40px" }}>
        <h2>Explore by</h2>

        <div style={{
          display: "flex",
          gap: 20,
          marginTop: 20
        }}>
          {["Style", "Scene", "Season"].map((item) => (
            <div key={item} style={{
              padding: 20,
              background: "white",
              borderRadius: 20,
              flex: 1
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 商品 */}
      <div style={{ padding: "40px" }}>
        <h2>For You</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginTop: 20
        }}>
          {[1,2,3,4].map((i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: 20,
              padding: 10
            }}>
              <img 
                src={`https://source.unsplash.com/random/300x300?fashion&${i}`}
                style={{
                  width: "100%",
                  borderRadius: 10
                }}
              />
              <p style={{ marginTop: 10 }}>Summer Dress</p>
              <p style={{ color: "#888" }}>¥129</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
