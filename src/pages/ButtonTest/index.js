/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export const ButtonTest = () => {
  const [fileInputState, setFileInputState] = useState('')
  const [previewSource, setPreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault()
    if (!previewSource) return
    uploadImage(previewSource)
  }

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage)
    try {
      await fetch('http://localhost:3001/api/eventos/registrar-evento', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-type': 'application/json' }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
        <section className="container mb-5 pt-4 pb-2 py-mg-4">
            <div className="row gy-4">
                {/* Content */}
                <div className="col-lg-9">
                    <h2 className="h4">PICTURES UPLOAD API</h2>
                    <h1>Upload</h1>
                    <form onSubmit={handleSubmitFile}>
                        <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="form-input"/>
                        <button type="submit" className="btn btn-primary shadow-primary btn-lg w-10">Submit</button>
                    </form>
                    {previewSource && (<img src={previewSource} alt="chosenIMG" style={{ height: '300px' }}/>)}
                    <p className="mb-4 pb-2">Atemporal AC</p>
                </div>
            </div>
        </section>
  )
}