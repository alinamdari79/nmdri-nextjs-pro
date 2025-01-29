import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import brandImage from "../../../../public/asstes/bg-login.jpg";
import LogInForm from "@/components/forms/LogInForm";

export default function LogIn() {
  return (
    <Card
      elevation={10}
      sx={{ display: "flex", width: "848px", flexDirection: "row" }}
    >
      <CardContent sx={{ width: "424px", paddingY: "50px" }}>
        <LogInForm />
      </CardContent>
      <Image
        style={{ width: "424px", height: "auto" }}
        src={brandImage}
        alt="SSS"
      />
    </Card>
  );
}
