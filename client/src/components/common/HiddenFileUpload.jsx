import styled from "@emotion/styled"

const FileUpload = styled("input")({
     visibility: "hidden",
})

const HiddenFileUpload = (props) => {
  return <FileUpload {...props} />
}

export default HiddenFileUpload
