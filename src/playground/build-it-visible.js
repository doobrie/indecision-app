const app = {
  visible: false
}

const onShowHide = (e) => {
  app.visible = !app.visible

  e.target.textContent = app.visible == true ? 'Hide Details' : 'Show Details'
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button name="showHide" onClick={onShowHide}>Show Details</button>

      <p>{app.visible == true ? 'Here are some details' : ''}</p>

    </div>
  )

  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById("app")
render()
