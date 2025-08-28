from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine

engine = create_async_engine(f"mysql+aiomysql://beda:adm!nro0t@DB-SQL:3306/SecureChat", pool_recycle = 500)

async_session = sessionmaker(
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
    bind=engine,
    class_=AsyncSession
)

async def get_db():
    db = async_session()
    try:
        yield db
    finally:
        await db.close()