import "./tileList.scss";
import TileComponent from "../tile-component/tile-component";

function TileList({ props }) {
  return (
    <div className="tile-list">
      <div className="tile-list__list">
        {props.map(tile => {
          <TileComponent
            key={tile.id}
            // add more here, depending on JG Tile-comp setup
            />
        })}
      </div>
    </div>
  );
}

export default TileList;