export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#F6F3EE",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
          borderBottom: "1px solid #E7E0D6",
          background: "#F6F3EE",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            fontFamily: "Georgia, serif",
          }}
        >
          HerCloset
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            color: "#6E675F",
            fontSize: 15,
          }}
        >
          <span>Style</span>
          <span>Scene</span>
          <span>Season</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          <a
            href="/browse"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: 14,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #E7E0D6",
              background: "white",
            }}
          >
            Browse
          </a>

          <a
            href="/upload"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 14,
              padding: "10px 18px",
              borderRadius: 999,
              background: "#111",
            }}
          >
            List Your Piece
          </a>
        </div>
      </nav>

      <section
        style={{
          padding: "48px 40px 60px",
        }}
      >
        <div
          style={{
            background: "#F8F5EF",
            border: "1px solid #E7E0D6",
            borderRadius: 36,
            overflow: "hidden",
            padding: 24,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div style={{ padding: "20px 12px 20px 12px" }}>
              <div
                style={{
                  fontSize: 84,
                  lineHeight: 0.92,
                  letterSpacing: "-2px",
                  fontFamily: "Georgia, serif",
                  marginBottom: 28,
                }}
              >
                Welcome
                <br />
                To
                <br />
                HerCloset
              </div>

              <div
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  borderRadius: 999,
                  border: "2px solid #DDE06B",
                  fontSize: 28,
                  fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                  marginBottom: 28,
                  color: "#3E3A34",
                }}
              >
                for your next trip
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  marginTop: 8,
                }}
              >
                <a
                  href="/browse"
                  style={{
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "14px 24px",
                    borderRadius: 999,
                    background: "#111",
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Explore →
                </a>

                <a
                  href="/upload"
                  style={{
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "14px 24px",
                    borderRadius: 999,
                    background: "white",
                    color: "#111",
                    fontSize: 15,
                    border: "1px solid #E7E0D6",
                  }}
                >
                  发布闲置
                </a>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                minHeight: 560,
                borderRadius: 32,
                overflow: "hidden",
                background: "#F1EBE1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(10, 1fr)",
                  gap: 10,
                  padding: 18,
                }}
              >
                {[
                  "linear-gradient(180deg,#E6D7C8 0%,#F2E7D8 25%,#86B9CF 68%,#B8DDEA 100%)",
                  "linear-gradient(180deg,#E4D5C8 0%,#EFE3D7 35%,#C1AF9C 78%,#A08B74 100%)",
                  "linear-gradient(180deg,#F0E5D8 0%,#F7EFE5 32%,#D5B79B 75%,#C59E7C 100%)",
                  "linear-gradient(180deg,#E8D8D1 0%,#F1E5E0 30%,#D28E72 75%,#8A6D69 100%)",
                  "linear-gradient(180deg,#EADFD2 0%,#F7EEE3 26%,#8EC2CF 68%,#B7DCE5 100%)",
                  "linear-gradient(180deg,#E3D8CC 0%,#EFE5DA 28%,#B9AE9F 72%,#8E7F6E 100%)",
                  "linear-gradient(180deg,#E2DDD2 0%,#EEE8DD 26%,#92A97D 72%,#72895D 100%)",
                  "linear-gradient(180deg,#ECE3D8 0%,#F7F0E7 25%,#7CB3C7 68%,#A5D8E6 100%)",
                  "linear-gradient(180deg,#DDD0CA 0%,#E9DFDA 30%,#AA7E77 74%,#654C4B 100%)",
                  "linear-gradient(180deg,#E7DDD1 0%,#F4ECE0 30%,#D8C29C 75%,#A48B67 100%)",
                ].map((bg, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 22,
                      background: bg,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "14%",
                        right: "14%",
                        top: "10%",
                        height: "58%",
                        borderRadius: 999,
                        background: "rgba(255,248,242,0.35)",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  minHeight: 560,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 30,
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    maxWidth: 760,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 24,
                      fontSize: 13,
                      marginBottom: 18,
                      letterSpacing: "0.18em",
                    }}
                  >
                    <span>STYLE</span>
                    <span>SCENE</span>
                    <span>SEASON</span>
                    <span>CURATED</span>
                  </div>

                  <div
                    style={{
                      fontSize: 118,
                      lineHeight: 0.9,
                      fontWeight: 800,
                      letterSpacing: "-3px",
                      textTransform: "uppercase",
                      fontStyle: "italic",
                      marginBottom: 18,
                    }}
                  >
                    HerCloset
                  </div>

                  <p
                    style={{
                      fontSize: 20,
                      lineHeight: 1.7,
                      margin: 0,
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    Curated vacation outfits and second-hand pieces
                    <br />
                    for every kind of trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
