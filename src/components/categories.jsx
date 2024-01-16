import "../styles/categories.css"

const Categories = () => {
    let links=[
        {categories:"All"},
        {categories:"Live"},
        {categories:"Music"},
        {categories:"Comedy"},
        {categories:"Sports"},
        {categories:"Gaming"},
        {categories:"Vlog"},
        {categories:"TV shows"},
        {categories:"Bollywood"},
        {categories:"News"},
    ]
    return (  
        <div className="Categories">
            <div className="categories_links">

            {links.map((data)=>(
                <a href="">{data.categories}</a>
            ))}        
                {/* <a href="">All</a><a href="">Live</a>                <a href="">Music</a>
                <a href="">Comedy</a><a href="">Sports</a>
                <a href="">Gaming</a><a href="">Vlogs</a>
                <a href="">Movies</a><a href="">TV shows</a>
                <a href="">Bollywood</a><a href="">News</a> */}
            </div>
        </div>
    );
}
 export default Categories;