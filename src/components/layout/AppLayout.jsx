
const AppLayout = () => WrappedComponent => {
  return ()=>{
    <div>
        <h1>Headrr</h1>
        <WrappedComponent/>
        <h1>Footer</h1>
    </div>
  }
}

export default AppLayout