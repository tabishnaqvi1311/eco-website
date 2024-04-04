import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "../ui/card";
import { cn } from "@/utils/utils";

export default function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref
}) {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <div className="w-full flex flex-col gap-y-4 items-center">
                    <h1 className={
                        cn("text-3xl font-bold")
                    }>
                        nameless
                    </h1>
                    <p className="text-muted-foreground text-base">
                        {headerLabel}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Button variant="lg" className="font-normal w-full" size="sm" asChild>
                    <Link to={backButtonHref} className="underline">{backButtonLabel}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}