/** Interfaz que define las propiedades que debe
 * tener el componente "ToogleAppBar".
 */
export interface ToogleAppBarProps {
  /** String que recibe el título a mostrar en el AppBar */
  title?: string;

  /** Boolean que indica si la animación de elevación en AppBar está activa. */
  enableElevation?: boolean;

  /** Boolean que define si la animación de hide en AppBar está activa. */
  enableHide?: boolean;

  /** Number que define el ancho del drawer. */
  drawerWidth: number;

  /** State que establece si el Drawer se encuentra abierto o cerrado. */
  openDrawer: boolean;

  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;

  /** Lado del que aparece el Drawer al aparecer. */
  isRight: boolean;
}
