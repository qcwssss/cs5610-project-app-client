import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDate } from "../../utils/date-format";
import { useNavigate } from "react-router-dom";
import { createPostThunk } from "../../services/posts-thunk";
import { handleImageData } from "../../services/image-service";
import { uploadImageThunk } from "../../services/image-thunk";

const CreatePostModalComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { imageUrl } = useSelector((state) => state.image);

  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    location: "",
    content: "",
    selectedFile: "",
  });
  const [imageSelected, setImageSelected] = useState(""); //new

  const dispatch = useDispatch();
  const handlePostSubmit = () => {
    let newPost = { ...postData, date: getCurrentDate() };
    if (imageUrl !== "") newPost = { ...newPost, image: imageUrl };

    dispatch(createPostThunk(newPost));
    setShow(false);
    clear();
    navigate("/myposts");
  };

  const handleShow = () => setShow(true);

  const clear = () => {
    setPostData({
      title: "",
      content: "",
      location: "",
      selectedFile: "",
      username: currentUser.username,
      date: getCurrentDate(),
    });
  };

  const uploadImage = (event) => {
    event.preventDefault();
    const formData = handleImageData(imageSelected);
    dispatch(uploadImageThunk(formData));
  };

  const handleCancel = () => {
    clear();
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" className="mt-1 p-2" onClick={handleShow}>
        <i className="fa-solid fa-feather me-1"></i>
        <span className="d-none d-xl-inline-block">Create</span>
      </Button>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleCancel}
      >
        <Modal.Header closeButton>
          <Modal.Title>Write Your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Created By</Form.Label>
              <Form.Control placeholder={currentUser.username} disabled />
            </Form.Group>
            <Form.Group key={`title-1`} className="mb-3" controlId="title-c2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post Title"
                autoFocus
                required
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
                required
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
                required
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
          <Button variant="primary" onClick={handlePostSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePostModalComponent;
