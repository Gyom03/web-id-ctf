import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// In a real application, this would come from an API or database
const availableBills = [
  { id: "1078", name: "Facture AquaPoney inc." },
  { id: "2730", name: "Facture Fistibule ASBL." },
  { id: "1728", name: "Facture Linux Corp." },
]

export default function BillSelector() {
  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-6">Bonjour employé n°217</h1>
      <p className="text-gray-600 mb-6">Vos factures :</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableBills.map((bill) => (
          <Card key={bill.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{bill.name}</CardTitle>
              <CardDescription>Emit par vous</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-500">
                This is your bill for {bill.name.split(" ")[0]}{" "}
                {bill.name.split(" ")[1]}.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/${bill.id}.pdf`} className="w-full">
                <Button className="w-full">View PDF</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
