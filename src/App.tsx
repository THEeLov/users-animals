import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import UsersPage from "./pages/UsersPage"

const App = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-4">
      <Tabs defaultValue="users" className="w-full">
        <nav>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="animals">Animals</TabsTrigger>
          </TabsList>
        </nav>
        <TabsContent value="users">
          <UsersPage />
        </TabsContent>
        <TabsContent value="animals">
          {/* <AnimalsPage />  */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default App
