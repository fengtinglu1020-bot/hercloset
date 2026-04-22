"use client";
import { useState } from "react";

export default function UploadPage() {
  const uploaded = [
    { label: "商品实拍图", color: "linear-gradient(180deg,#F3E6DA 0%, #E8D3C2 100%)" },
    { label: "细节图", color: "linear-gradient(180deg,#EEDFD1 0%, #D9C2AE 100%)" },
    { label: "上身参考图", color: "linear-gradient(180deg,#E6E6E0 0%, #CFCFC6 100%)" },
  ];

  const styleTags = ["法式", "甜美", "辣妹", "Y2K", "Clean Girl", "Boho", "学院风"];
  const sceneTags = ["海边", "日常", "城市拍照", "度假酒店", "brunch", "公园", "沙滩", "约会"];
  const seasonTags = ["春天", "夏天", "秋天", "冬天", "四季皆宜"];

  const sizeOptions = ["XS", "S", "M", "L", "XL"];
  const wearOptions = ["全新未穿", "1次", "2-3次", "4-5次", "5次以上"];
  const washOptions = ["未洗涤", "1次", "2次", "3次以上"];

  const [title, setTitle] = useState("法式碎花吊带裙 / 夏日海边");
  const [size, setSize] = useState("M");
  const [wearCount, setWearCount] = useState("2-3次");
  const [washCount, setWashCount] = useState("1次");
  const [styleTag, setStyleTag] = useState("法式");
  const [sceneTag, setSceneTag] = useState("海边");
  const [seasonTag, setSeasonTag] = useState("夏天");
  const [originalPrice, setOriginalPrice] = useState("299");
  const [resalePrice, setResalePrice] = useState("128");
  const [description, setDescription] = useState(
    "法式碎花吊带裙，适合海边和度假场景，颜色温柔，上身很出片。布料轻薄，夏天穿很舒服。"
  );

  const chipStyle = (active) => ({
    padding: "10px 14px",
    borderRadius: 999,
    border: active ? "1px solid #D5D85A" : "1px solid #DDD5CA",
    background: active ? "#E8EC7A" : "#fff",
    color: "#4D493F",
    fontSize: 13,
    cursor: "pointer",
  });

  const inputStyle = {
    width: "100%",
    height: 46,
    borderRadius: 14,
    border: "1px solid #DDD5CA",
    background: "#FBF9F5",
    padding: "0 14px",
    color: "#4D493F",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
  };

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
          background: "#F6F3EE",
          borderBottom: "1px solid #E7E0D6",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#111",
            fontSize: 34,
            fontWeight: 600,
            fontFamily: "Georgia, serif",
          }}
        >
          HerCloset
        </a>

        <div style={{ display: "flex", gap: 12 }}>
          <a
            href="/browse"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: 14,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #E7E0D6",
              background: "#fff",
            }}
          >
            Browse
          </a>

          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: 14,
              padding: "10px 18px",
              borderRadius: 999,
              background: "#111",
            }}
          >
            Back Home
          </a>
        </div>
      </nav>

      <section
        style={{
          padding: "28px 32px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#F8F5EF",
              border: "1px solid #E7E0D6",
              borderRadius: 32,
              padding: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 28,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  发布闲置
                </div>
                <div style={{ color: "#6E675F", fontSize: 15 }}>
                  把只穿过一次的漂亮衣服，继续去下一个海边
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  color: "#8B847B",
                }}
              >
                {["1", "2", "3", "4", "5"].map((step, i) => (
                  <div
                    key={step}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: i === 0 ? "#111" : "#F2EEE8",
                        color: i === 0 ? "white" : "#8B847B",
                        fontWeight: 600,
                      }}
                    >
                      {step}
                    </div>
                    {i !== 4 && (
                      <div
                        style={{
                          width: 26,
                          height: 1,
                          background: "#DDD5CA",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #ECE4D8",
                borderRadius: 24,
                padding: 22,
                marginBottom: 18,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
                1. 上传图片
              </div>

              <div style={{ marginBottom: 14, color: "#6E675F", fontSize: 14 }}>
                至少上传 1–3 张商品实拍图，建议再补充细节图和上身参考图
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 14,
                }}
              >
                {uploaded.map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        height: 156,
                        borderRadius: 20,
                        background: item.color,
                        border: "1px solid #E7E0D6",
                      }}
                    />
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 13,
                        color: "#6E675F",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    height: 156,
                    borderRadius: 20,
                    border: "1.5px dashed #D8D0C4",
                    background: "#FBF9F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8B847B",
                    fontSize: 28,
                  }}
                >
                  +
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #ECE4D8",
                borderRadius: 24,
                padding: 22,
                marginBottom: 18,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
                2. 商品信息
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 14, marginBottom: 10 }}>尺码 Size</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {sizeOptions.map((item) => (
                      <button
                        key={item}
                        onClick={() => setSize(item)}
                        style={chipStyle(item === size)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 14, marginBottom: 10 }}>穿着次数</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {wearOptions.map((item) => (
                      <button
                        key={item}
                        onClick={() => setWearCount(item)}
                        style={chipStyle(item === wearCount)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 14, marginBottom: 10 }}>洗涤次数</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {washOptions.map((item) => (
                      <button
                        key={item}
                        onClick={() => setWashCount(item)}
                        style={chipStyle(item === washCount)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 14, marginBottom: 10 }}>商品标题</div>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #ECE4D8",
                borderRadius: 24,
                padding: 22,
                marginBottom: 18,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
                3. 分类标签
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 14, marginBottom: 10 }}>风格 Style</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {styleTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setStyleTag(tag)}
                      style={chipStyle(tag === styleTag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 14, marginBottom: 10 }}>出片场景 Scene</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {sceneTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSceneTag(tag)}
                      style={chipStyle(tag === sceneTag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 14, marginBottom: 10 }}>季节 Season</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {seasonTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSeasonTag(tag)}
                      style={chipStyle(tag === seasonTag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #ECE4D8",
                borderRadius: 24,
                padding: 22,
                marginBottom: 18,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
                4. 定价
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 14, marginBottom: 10 }}>原价</div>
                  <input
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <div style={{ fontSize: 14, marginBottom: 10 }}>转卖价</div>
                  <input
                    value={resalePrice}
                    onChange={(e) => setResalePrice(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #ECE4D8",
                borderRadius: 24,
                padding: 22,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
                5. 其他信息
              </div>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: 120,
                  borderRadius: 18,
                  border: "1px solid #DDD5CA",
                  background: "#FBF9F5",
                  padding: 14,
                  color: "#4D493F",
                  fontSize: 14,
                  lineHeight: 1.7,
                  outline: "none",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 20,
                  gap: 12,
                }}
              >
                <button
                  style={{
                    flex: 1,
                    height: 48,
                    borderRadius: 999,
                    border: "1px solid #DDD5CA",
                    background: "#fff",
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  保存草稿
                </button>

                <button
                  style={{
                    flex: 1.2,
                    height: 48,
                    borderRadius: 999,
                    border: "none",
                    background: "#111",
                    color: "#fff",
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  下一步
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "sticky",
              top: 108,
            }}
          >
            <div
              style={{
                background: "#F8F5EF",
                border: "1px solid #E7E0D6",
                borderRadius: 32,
                padding: 24,
                marginBottom: 18,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
                实时预览
              </div>

              <div
                style={{
                  background: "#fff",
                  border: "1px solid #E7E0D6",
                  borderRadius: 28,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    height: 420,
                    borderRadius: 22,
                    background: "linear-gradient(180deg,#F1E5D6 0%, #F7EBDD 42%, #8DC2D7 72%, #A7DBEA 100%)",
                    marginBottom: 14,
                  }}
                />

                <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
                  {title}
                </div>

                <div style={{ color: "#6E675F", marginBottom: 14 }}>¥{resalePrice}</div>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                  }}
                >
                  {[styleTag, sceneTag, seasonTag, wearCount].map((tag) => (
                    <div
                      key={tag}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 999,
                        background: "#F3EFE8",
                        fontSize: 12,
                        color: "#6E675F",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "#6E675F",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  尺码：{size} ｜ 洗涤次数：{washCount} ｜ 原价：¥{originalPrice}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: "#4D493F",
                    lineHeight: 1.7,
                    marginBottom: 18,
                  }}
                >
                  {description}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <button
                    style={{
                      flex: 1,
                      height: 44,
                      borderRadius: 999,
                      border: "1px solid #DDD5CA",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    收藏
                  </button>
                  <button
                    style={{
                      flex: 1.2,
                      height: 44,
                      borderRadius: 999,
                      border: "none",
                      background: "#111",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    立即购买
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#E7EC7A",
                borderRadius: 28,
                padding: "22px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 34,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1.05,
                    marginBottom: 8,
                  }}
                >
                  Give your outfit
                  <br />
                  a second life ✨
                </div>
                <div style={{ color: "#5B584D", fontSize: 14 }}>
                  Upload once, inspire the next trip.
                </div>
              </div>

              <div
                style={{
                  minWidth: 110,
                  height: 110,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.45)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
