List<string> TaskList = new List<string>();
int MenuSelected = 0;
do
{
    MenuSelected = ShowMainMenu();
    if ((Menu)MenuSelected == Menu.Add)
    {
        ShowMenuAdd();
    }
    else if ((Menu)MenuSelected == Menu.Remove)
    {
        ShowMenuRemove();
    }
    else if ((Menu)MenuSelected == Menu.List)
    {
        ShowMenuTaskList();
    }
} while ((Menu)MenuSelected != Menu.Exit);
/// <summary>
/// Show the options for Task 
/// </summary>
/// <returns>Returns option selected by user</returns>
int ShowMainMenu()
{
    Console.WriteLine("----------------------------------------");
    Console.WriteLine("Ingrese la opción a realizar: ");
    Console.WriteLine("1. Nueva tarea");
    Console.WriteLine("2. Remover tarea");
    Console.WriteLine("3. Tareas pendientes");
    Console.WriteLine("4. Salir");

    string menuSelected = Console.ReadLine();
    return Convert.ToInt32(menuSelected);
}

void ShowMenuRemove()
{
    try
    {
        Console.WriteLine("Ingrese el número de la tarea a remover: ");
        ShowMenuTaskList();

        string taskNumberToDelete = Console.ReadLine();
        // Remove one position because the array stars in 0
        int indexToRemove = Convert.ToInt32(taskNumberToDelete) - 1;

        if (indexToRemove > (TaskList.Count - 1) || indexToRemove < 0)
            Console.WriteLine("El número de la tarea seleccionada no es válida.");
        else
        {
            if (indexToRemove > -1 && TaskList.Count > 0)
            {
                string taskToRemove = TaskList[indexToRemove];
                TaskList.RemoveAt(indexToRemove);
                Console.WriteLine($"Tarea {taskToRemove} eliminada");
            }
        }
    }
    catch (Exception)
    {
        Console.WriteLine("Ha ocurrido un error al eliminar la tarea");
    }
}

void ShowMenuAdd()
{
    try
    {
        Console.WriteLine("Ingrese el nombre de la tarea: ");
        string newTask = Console.ReadLine();
        TaskList.Add(newTask);
        Console.WriteLine("Tarea registrada");
    }
    catch (Exception)
    {
    }
}

void ShowMenuTaskList()
{
    if (TaskList?.Count > 0)
    {
        Console.WriteLine("----------------------------------------");
        var indexTask = 1;
        TaskList.ForEach(p => Console.WriteLine($"{indexTask++}. {p}"));

        Console.WriteLine("----------------------------------------");

    }
    else
    {
        Console.WriteLine("No hay tareas por realizar");
    }
}

public enum Menu
{
    Add = 1,
    Remove = 2,
    List = 3,
    Exit = 4
}

