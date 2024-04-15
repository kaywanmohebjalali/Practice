import { AppBar, Drawer, Toolbar, Typography } from "@mui/material"

const NavDrawer = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
           <Typography variant="h6">
            Material Ui
           </Typography>
        </Toolbar>

      </AppBar>

      <Drawer>

      </Drawer>
      <main>

      </main>
    </div>
  )
}

export default NavDrawer