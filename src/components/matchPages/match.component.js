import React, { useState, useEffect } from "react";
import MatchService from "../../services/match.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";

const Match = (props) => {
  const initialMatchState = {
    id: null,
    writer: [],
    title: "",
    img: "",
    description:"",
    symptoms:[],
    predict:[],
    resultimg:"",
    result:""
  };
  const [currentMatch, setCurrentMatch] = useState(initialMatchState);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  const getMatch = id => {
    MatchService.get(id)    // tutorial service 수정 필요
        .then(response => {
          setCurrentMatch(response.data);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  const retrieveImages = () => {
    imageService.getFiles()
        .then(response => {
          setImages(response.data);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  useEffect(() => {
    getMatch(props.match.params.id);
    retrieveImages();
  }, [props.match.params.id]);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentMatch({ ...currentMatch, [name]: value });
  };

  const updateContent = () => {
    let data = {
        id: currentMatch.id,
        writer: currentMatch.writer,
        title: currentMatch.title,
        img : currentMatch.img,
        description: currentMatch.description,
        symptoms: currentMatch.symptoms,
        predict: currentMatch.predict,
        resultimg: currentMatch.resultimg,
        result: currentMatch.result

    };

    MatchService.update(currentMatch.id, data)
        .then(response => {
          console.log(response.data);
          setMessage("수정이 완료 되었습니다.");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const removeMatch = () => {
    MatchService.delete(currentMatch.id)
        .then(response => {
          console.log(response.data);
          // props.history.push("/admin");
        })
        .catch(e => {
          console.log(e);
        });
      props.history.push("/match");
  };

  const moveUp = () => {
    props.history.push("/match");
  };

  const imageView = (match) => {
    const img = match.img;
    let name = "";
    let url = "";
    let exist = false;

    for(let i = 0; i < images.length; i++){
      if(images[i]['name'].includes(img)){
        name = images[i]['name'];
        url = images[i]['url'];
        exist = true;
        break;
      }
    }
    if(exist) {
      return (
          <div className={"wrapper"}>
            <div style={{height: "200px", width: "140px"}}
                 className={"image-card center-align vert-center-align"}>
              <img src={url} alt={name} height={"200px"} width={"140px"}/>
            </div>
          </div>
      );
    }else{
      return (
          <div className={"wrapper"}>
            <div style={{height: "200px", width: "140px"}}
                 className={"image-card center-align vert-center-align"}/>
          </div>
      );
    }
  };

// resultimg 추가
    const resultImageView = (match) => {
        const resultimg = match.resultimg;
        let name = "";
        let url = "";
        let exist = false;

        for(let i = 0; i < images.length; i++){
            if(images[i]['name'].includes(resultimg)){
                name = images[i]['name'];
                url = images[i]['url'];
                exist = true;
                break;
            }
        }
        if(exist) {
            return (
                <div className={"wrapper"}>
                    <div style={{height: "200px", width: "140px"}}
                         className={"image-card center-align vert-center-align"}>
                        <img src={url} alt={name} height={"200px"} width={"140px"}/>
                    </div>
                </div>
            );
        }else{
            return (
                <div className={"wrapper"}>
                    <div style={{height: "200px", width: "140px"}}
                         className={"image-card center-align vert-center-align"}/>
                </div>
            );
        }
    };
// resultimg 추가


  return (
      <div>
        {currentMatch ? (
            <div className="edit-form">
              <h5>정보 수정</h5>
              <hr/>
              <form>
                {imageView(currentMatch)}
                <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={currentMatch.title}
                      onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">설명</label>
                  <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={currentMatch.description}
                      onChange={handleInputChange}
                      rows={"5"}
                  />
                </div>
              </form>
              <hr/>
              <table width={"100%"}>
                <tbody>
                <tr>
                  <td className={"left-align"}>
                    <button
                        type="submit"
                        className="addBtnStyle"
                        onClick={updateContent}
                    >
                      수정
                    </button>
                    &nbsp;&nbsp;
                    <button
                        type="button"
                        onClick={moveUp}
                        className="addBtnStyle">
                      목록
                    </button>
                  </td>
                  <td className={"right-align"}>
                    <button className="delBtnStyle" onClick={removeMatch}>
                      삭제
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
              <p>{message}</p>
            </div>
        ) : (
            <div>
              <br />
              <p>Please click on a Match...</p>
            </div>
        )}
      </div>
  );
};

export default Match;