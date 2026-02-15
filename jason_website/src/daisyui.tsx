
interface Product{
  id:number;
  name:string;
  image: string;
  description:string;
  button:string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Jordans",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Premium basketball shoes with iconic design",
    button: "Buy Now"
  },
  {
    id: 2,
    name: "Adidas Firefly",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight running shoes for everyday comfort",
    button: "Purchase later"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Industry-leading noise cancellation technology",
    button: "Add to Cart"
  },
  {
    id: 4,
    name: "Apple AirPods Pro",
    image:  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Seamless wireless audio with spatial sound",
    button: "Buy Now"
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracking and health monitoring",
    button: "Get Deal"
  },
  {
    id: 6,
    name: "Puma RS-X Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Retro-inspired design with modern comfort",
    button: "Shop Now"
  },
  {
    id: 7,
    name: "Beats Studio Pro",
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop",
    description: "Premium sound quality with active noise control",
    button: "Purchase later"
  },
  {
    id: 8,
    name: "New Balance 990v6",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Classic comfort running shoe engineered in USA",
    button: "Buy Now"
  },
  {
    id: 9,
    name: "Converse Chuck Taylor All Star",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Timeless casual sneaker for every occasion",
    button: "Add to Cart"
  },
  {
    id: 10,
    name: "Jordan Retro 11",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Legendary basketball shoe with patent leather",
    button: "Get Deal"
  }
]
export default function MyCard(){
    return(
        <>

        <div> 
          <h1 style={{
            textAlign:"center",
            color:"green",
            fontSize:"34px",
            marginTop:"14px"
          }}>Shop Now with us </h1>
          <p style={{
            textAlign:"center",
            color:"blue",
            fontSize:"24px",
            marginBottom:"14px"
          }}> We offer the best deals in town. Shop with us today and get 10% off your purchase </p>
        </div>

<div style={{
  display:"grid",
  gridTemplateColumns:"1fr 1fr 1fr ",
  gap:"10px",
}}>
        { products.map((product:Product) => (
          <div key={product.id}>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={product.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{product.button}</button>
    </div>
  </div>
</div>
          </div>

        ))}

        </div>

        
        </>
    )
}