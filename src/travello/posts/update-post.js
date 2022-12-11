import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageThunk } from "../../services/image-thunk";
import { useNavigate } from "react-router-dom";
import { updatepostThunk } from "./../../services/posts-thunk";
import { getCurrentDate } from "../../utils/date-format";
import { handleImageData } from "../../services/image-service";
import { findPostByIdThunk } from "./../../services/posts-thunk";
import { useParams } from "react-router";

const UpdatePostModalComponent = () => {
  let navigate = useNavigate();
  const { pid } = useParams();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const { details } = useSelector((state) => state.postsData);

  useEffect(() => {
    dispatch(findPostByIdThunk(pid));
  }, [dispatch, pid]);

  const [postData, setPostData] = useState(details);
  useEffect(() => {
    if (details?._id !== postData._id) setPostData(details);
  }, [details, postData?._id]);

  // handle image
  const { imageUrl } = useSelector((state) => state.image);
  const [imageSelected, setImageSelected] = useState(""); //new
  const [postUrl, setPostUrl] = useState(null); //old

  const handlePostSubmit = (event) => {
    event.preventDefault();

    let newPost = { ...postData, date: getCurrentDate() };
    if (postUrl) newPost = { ...newPost, image: postUrl };
    dispatch(updatepostThunk(newPost));
    setShow(false);
    navigate("/myposts");
  };

  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setShow(false);
  };

  useEffect(() => {
    if (imageUrl !== "") {
      setPostUrl(imageUrl);
      return;
    }
  }, [imageUrl]);

  const uploadImage = (event) => {
    event.preventDefault();
    const formData = handleImageData(imageSelected);
    dispatch(uploadImageThunk(formData));
  };

  return (
    <>
      <Button
        variant="light"
        className="mt-1 btn-sm rounded-pill"
        onClick={handleShow}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "100px",
          height: "40px",
        }}
      >
        <span className="fs-5 fw-bold ">Edit</span>
      </Button>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleCancel}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Created By</Form.Label>
              <Form.Control placeholder="John" disabled />
            </Form.Group>
            <Form.Group key={`title-1`} className="mb-3" controlId="title-c2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post Title"
                autoFocus
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group key={`city-1`} className="mb-3" controlId="city-c2">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                autoFocus
                value={postData.location}
                onChange={(e) =>
                  setPostData({ ...postData, location: e.target.value })
                }
              />
            </Form.Group>

            {/* image */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setImageSelected(e.target.files[0]);
                }}
              />
              <button
                className="btn btn-light mt-2 me-3"
                onClick={(e) => uploadImage(e)}
              >
                upload
              </button>
              <span className="text-success mt-2">
                {imageUrl !== "" && <i className="fa-solid fa-check"></i>}
              </span>
            </Form.Group>
            {/* content */}
            <Form.Group className="mb-3" controlId="post.content">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write here"
                value={postData.content}
                onChange={(e) =>
                  setPostData({ ...postData, content: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handlePostSubmit(e);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdatePostModalComponent;
