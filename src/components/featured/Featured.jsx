import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=tulum,berlin,london"
    );

    return (
        <div className="featured">
            {loading ? "Loading please wait" : <><div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/129956285.jpg?k=dcfddbe438ceff751698c179de00ba7f97eae8a0c58b23bba8f051e81bf255be&o=&hp=1"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Tulum </h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/United-States/New-York/112100_SCN_NewYork_iStock901277560_ZAB1A1.jpg?tr=w-1200%2Cfo-auto"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://i.pinimg.com/564x/d5/3c/b4/d53cb43f9e18b22b1e2d3356686689cc.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div></>}
        </div>
    );
};

export default Featured;
