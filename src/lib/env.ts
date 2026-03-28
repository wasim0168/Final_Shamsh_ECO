const { NEXT_PUBLIC_BASE_URL, EMAIL_USER, EMAIL_PASS, DATABASE_URL } =
  process.env;

const ENV = {
  BaseUrl: (NEXT_PUBLIC_BASE_URL! as string) || "",
  EUser: (EMAIL_USER! as string) || "",
  EPass: (EMAIL_PASS! as string) || "",
  DB_URL: (DATABASE_URL! as string) || "",
} as const;

export default ENV;
