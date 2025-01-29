import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import brandImage from "../../../../public/asstes/bg-signup.jpg";
import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUp() {
  return (
    <Card
      elevation={10}
      sx={{ display: "flex", width: "848px", flexDirection: "row" }}
    >
      <CardContent sx={{ width: "424px", paddingY: "30px" }}>
        <SignUpForm />
      </CardContent>
      <Image
        style={{ width: "424px", height: "auto" }}
        src={brandImage}
        alt="SSS"
      />
    </Card>
  );
}
