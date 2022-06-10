import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (`
        <div class="row  mb-2">
            <div class="col-10">
            <div class="input-group border rounded-pill">
                <span class="input-group-text bg-transparent border-0">
                    <i class="fas fa-search"></i>
                </span>
            <input type="text" placeholder="Search Twitter" class="form-control bg-transparent border-0 white-typer">
        </div>
            </div>
            <div class="col-2">
                <i class="fas fa-cog fa-2x"></i>
            </div>
        </div>


        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a href="#" class="nav-link active"> For you </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link"> Trending </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link"> News </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link"> Sports </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link"> Entertainment </a>
            </li>
        </ul>
        <img src="http://placekitten.com/300/200" alt="" width="100%">

        ${PostSummaryList()} 
    `);
}
export default ExploreComponent;