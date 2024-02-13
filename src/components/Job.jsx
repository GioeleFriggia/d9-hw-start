import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Card className="my-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="mb-0">
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Card.Title>
          <div>
            {isFav ? (
              <StarFill
                color="gold"
                size={24}
                className="mr-2"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITE",
                    payload: data.company_name,
                  })
                }
              />
            ) : (
              <Star
                color="gold"
                size={24}
                className="mr-2"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_FAVOURITE",
                    payload: data.company_name,
                  })
                }
              />
            )}
          </div>
        </div>
        <Card.Text>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Job;
