import { supabase } from "@/lib/supabase/supabase-client";

export async function POST(req: Request) {
	const reqData = await req.json();
	let { data } = await supabase.from("products").select().eq("created_by", reqData.id);
	if (!data) data = [];
	return Response.json(data);
}
