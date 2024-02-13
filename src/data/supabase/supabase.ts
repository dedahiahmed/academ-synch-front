export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      course: {
        Row: {
          description: string | null
          files: string[]
          id: number
          semester: Database["public"]["Enums"]["semestertype"]
          teacher_id: number
          type: Database["public"]["Enums"]["coursetype"]
        }
        Insert: {
          description?: string | null
          files: string[]
          id?: number
          semester: Database["public"]["Enums"]["semestertype"]
          teacher_id: number
          type: Database["public"]["Enums"]["coursetype"]
        }
        Update: {
          description?: string | null
          files?: string[]
          id?: number
          semester?: Database["public"]["Enums"]["semestertype"]
          teacher_id?: number
          type?: Database["public"]["Enums"]["coursetype"]
        }
        Relationships: [
          {
            foreignKeyName: "course_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher"
            referencedColumns: ["id"]
          }
        ]
      }
      student: {
        Row: {
          id: number
          sector: string
          user_id: number
        }
        Insert: {
          id?: number
          sector: string
          user_id: number
        }
        Update: {
          id?: number
          sector?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "student_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teacher: {
        Row: {
          id: number
          matter: string
          phone_number: string
          user_id: number
        }
        Insert: {
          id?: number
          matter: string
          phone_number: string
          user_id: number
        }
        Update: {
          id?: number
          matter?: string
          phone_number?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "teacher_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          id: number
          last_name: string
          password: string
          role: Database["public"]["Enums"]["userrole"]
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          id?: number
          last_name: string
          password: string
          role: Database["public"]["Enums"]["userrole"]
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          id?: number
          last_name?: string
          password?: string
          role?: Database["public"]["Enums"]["userrole"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      coursetype: "TD" | "TP" | "COURSE"
      semestertype: "S1" | "S2" | "S3" | "S4"
      userrole: "STUDENT" | "ADMIN" | "TEACHER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
